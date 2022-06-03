import { Injectable } from '@nestjs/common';
import { data, ReportType } from './data';
import { v4 as uuid } from 'uuid';

interface Report {
  amount: number;
  source: string;
}
@Injectable()
export class AppService {
  getAllReports(type: ReportType) {
    // instead of having this logic in the controller, we will call the method in there
    return data.report.filter((report) => report.type === type);
  }
  getReportById(type: ReportType, id: string) {
    return data.report
      .filter((report) => report.type == type)
      .find((report) => report.id === id);
  }
  createReport(type: ReportType, { amount, source }: Report) {
    const newReport = {
      id: uuid(),
      amount,
      source,
      created_at: new Date(),
      updated_at: new Date(),
      type,
    };
    data.report.push(newReport);
    return newReport;
  }
  upDateReport(type: ReportType, id: string, body: Report) {
    const reportToUpdate = data.report
      .filter((report) => report.type == type)
      .find((report) => report.id === id);
    if (!reportToUpdate) return;
    const reportIndex = data.report.findIndex(
      (report) => report.id === reportToUpdate.id,
    );
    data.report[reportIndex] = {
      ...data.report[reportIndex],
      ...body,
      updated_at: new Date(),
    };
    return data.report[reportIndex];
  }
  delete(id: string) {
    const reportIndex = data.report.findIndex((report) => report.id == id);
    if (reportIndex === -1) return;
    data.report.splice(reportIndex, 1);
    return;
  }
}
