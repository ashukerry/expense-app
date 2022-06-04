export enum ReportType {
  INCOME = 'income',
  EXPENSE = 'expense',
}
export const data: Data = {
  report: [
    {
      id: 'uuid1',
      source: 'salary',
      amount: 7500,
      created_at: new Date(),
      updated_at: new Date(),
      type: ReportType.INCOME,
    },
    {
      id: 'uuid2',
      source: 'youtube',
      amount: 300,
      created_at: new Date(),
      updated_at: new Date(),
      type: ReportType.INCOME,
    },
    {
      id: 'uuid3',
      source: 'Food',
      amount: 500,
      created_at: new Date(),
      updated_at: new Date(),
      type: ReportType.EXPENSE,
    },
  ],
};
interface Data {
  report: {
    id: string;
    source: string;
    amount: number;
    created_at: Date;
    updated_at: Date;
    type: ReportType;
  }[];
}

data.report.push({
  id: 'uuid',
  source: 'salary',
  amount: 760,
  created_at: new Date(),
  updated_at: new Date(),
  type: ReportType.INCOME,
});
export class ReportResponse {
  id: string;
  source: string;
  amount: number;
  created_at: Date;
  updatad_at: Data;
  type: ReportType;
}
