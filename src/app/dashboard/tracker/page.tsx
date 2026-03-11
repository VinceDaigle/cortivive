"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { ProgressRing } from "@/components/dashboard/progress-ring";

interface CheckIn {
  id: string;
  date: string;
  mood: number;
  stress: number;
  bloating: number;
  sleep: number;
  notes: string | null;
}

export default function TrackerPage() {
  const [mood, setMood] = useState(3);
  const [stress, setStress] = useState(3);
  const [bloating, setBloating] = useState(3);
  const [sleep, setSleep] = useState(3);
  const [notes, setNotes] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success">("idle");
  const [history, setHistory] = useState<CheckIn[]>([]);

  useEffect(() => {
    fetch("/api/checkin")
      .then((r) => r.json())
      .then((data) => setHistory(data.checkIns || []))
      .catch(() => {});
  }, [status]);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus("loading");
    try {
      await fetch("/api/checkin", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ mood, stress, bloating, sleep, notes }),
      });
      setStatus("success");
      setNotes("");
      setTimeout(() => setStatus("idle"), 2000);
    } catch {
      setStatus("idle");
    }
  }

  const latestAvg = history.length > 0
    ? {
        mood: +(history.slice(0, 7).reduce((s, c) => s + c.mood, 0) / Math.min(history.length, 7)).toFixed(1),
        stress: +(history.slice(0, 7).reduce((s, c) => s + c.stress, 0) / Math.min(history.length, 7)).toFixed(1),
        bloating: +(history.slice(0, 7).reduce((s, c) => s + c.bloating, 0) / Math.min(history.length, 7)).toFixed(1),
        sleep: +(history.slice(0, 7).reduce((s, c) => s + c.sleep, 0) / Math.min(history.length, 7)).toFixed(1),
      }
    : null;

  return (
    <div>
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-charcoal mb-2">
          Daily Check-In
        </h1>
        <p className="text-charcoal/60">
          Track how you&apos;re feeling. Small changes compound into big shifts.
        </p>
      </div>

      {/* 7-Day Averages */}
      {latestAvg && (
        <div className="bg-white rounded-2xl border border-charcoal/10 p-6 mb-8">
          <h2 className="text-lg font-semibold text-charcoal mb-4">
            Last 7 Days
          </h2>
          <div className="flex justify-around">
            <ProgressRing value={latestAvg.mood} label="Mood" color="#8BA888" />
            <ProgressRing value={latestAvg.stress} label="Stress" color="#E8836B" />
            <ProgressRing value={latestAvg.bloating} label="Bloating" color="#E8836B" />
            <ProgressRing value={latestAvg.sleep} label="Sleep" color="#8BA888" />
          </div>
        </div>
      )}

      {/* Check-in Form */}
      <div className="bg-white rounded-2xl border border-charcoal/10 p-6 mb-8">
        <h2 className="text-lg font-semibold text-charcoal mb-6">
          How are you feeling today?
        </h2>

        <form onSubmit={handleSubmit} className="space-y-6">
          <SliderField
            label="Mood"
            emoji="😊"
            value={mood}
            onChange={setMood}
            low="Low"
            high="Great"
          />
          <SliderField
            label="Stress"
            emoji="😤"
            value={stress}
            onChange={setStress}
            low="Calm"
            high="Very stressed"
          />
          <SliderField
            label="Bloating"
            emoji="🫠"
            value={bloating}
            onChange={setBloating}
            low="None"
            high="Severe"
          />
          <SliderField
            label="Sleep Quality"
            emoji="😴"
            value={sleep}
            onChange={setSleep}
            low="Poor"
            high="Excellent"
          />

          <div>
            <label className="block text-sm font-medium text-charcoal mb-1">
              Notes (optional)
            </label>
            <textarea
              value={notes}
              onChange={(e) => setNotes(e.target.value)}
              rows={2}
              placeholder="Anything notable today?"
              className="w-full px-4 py-3 rounded-xl border border-charcoal/20 bg-white text-charcoal placeholder:text-charcoal/40 focus:outline-none focus:ring-2 focus:ring-coral/50 focus:border-coral transition-all text-sm"
            />
          </div>

          <Button type="submit" className="w-full" disabled={status === "loading"}>
            {status === "success"
              ? "Logged! ✓"
              : status === "loading"
              ? "Saving..."
              : "Log Today's Check-In"}
          </Button>
        </form>
      </div>

      {/* History */}
      {history.length > 0 && (
        <div>
          <h2 className="text-lg font-semibold text-charcoal mb-4">
            Recent Check-Ins
          </h2>
          <div className="space-y-3">
            {history.slice(0, 7).map((entry) => (
              <div
                key={entry.id}
                className="bg-white rounded-xl border border-charcoal/10 p-4 flex items-center justify-between"
              >
                <div className="text-sm text-charcoal/60">
                  {new Date(entry.date).toLocaleDateString("en-US", {
                    weekday: "short",
                    month: "short",
                    day: "numeric",
                  })}
                </div>
                <div className="flex gap-4 text-sm">
                  <span>😊 {entry.mood}</span>
                  <span>😤 {entry.stress}</span>
                  <span>🫠 {entry.bloating}</span>
                  <span>😴 {entry.sleep}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

function SliderField({
  label,
  emoji,
  value,
  onChange,
  low,
  high,
}: {
  label: string;
  emoji: string;
  value: number;
  onChange: (v: number) => void;
  low: string;
  high: string;
}) {
  return (
    <div>
      <div className="flex items-center justify-between mb-2">
        <label className="text-sm font-medium text-charcoal">
          {emoji} {label}
        </label>
        <span className="text-sm font-bold text-coral">{value}/5</span>
      </div>
      <input
        type="range"
        min={1}
        max={5}
        value={value}
        onChange={(e) => onChange(Number(e.target.value))}
        className="w-full accent-coral"
      />
      <div className="flex justify-between text-xs text-charcoal/40 mt-1">
        <span>{low}</span>
        <span>{high}</span>
      </div>
    </div>
  );
}
