import week1 from "./week-1/data";
import week2 from "./week-2/data";
import week3 from "./week-3/data";

export interface Routine {
  readonly title: string;
  readonly duration: string;
  readonly intensity: string;
  readonly description: string;
  readonly steps: readonly string[];
}

export interface Meal {
  readonly type: string;
  readonly icon: string;
  readonly title: string;
  readonly description: string;
  readonly ingredients: readonly string[];
  readonly benefit?: string;
}

export interface WeekContent {
  readonly week: number;
  readonly theme: string;
  readonly description: string;
  readonly routines: readonly Routine[];
  readonly meals: readonly Meal[];
  readonly tips: readonly string[];
}

const weeks: Record<number, WeekContent> = {
  1: week1,
  2: week2,
  3: week3,
};

export function getWeekContent(week: number): WeekContent {
  return weeks[week] || weeks[1];
}

export function getAllWeeks(): WeekContent[] {
  return Object.values(weeks);
}
