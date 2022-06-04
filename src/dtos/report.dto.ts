import {
  IsNumber,
  IsPositive,
  IsString,
  IsNotEmpty,
  IsOptional,
} from 'class-validator';
import { Exclude, Expose } from 'class-transformer';
import { ReportType } from 'src/data';
export class CreateReportDto {
  @IsOptional()
  @IsNumber()
  @IsPositive()
  amount: number;
  @IsOptional()
  @IsString()
  @IsNotEmpty()
  source: string;
}

export class UpdateReportDto {
  @IsNumber()
  @IsOptional()
  @IsPositive()
  amount: number;
  @IsOptional()
  @IsString()
  @IsNotEmpty()
  source: string;
}
export class ReportResponseDto {
  id: string;
  source: string;
  amount: number;
  @Exclude()
  created_at: Date;
  @Exclude()
  updated_at: Date;
  type: ReportType;

  @Expose({ name: 'createdAt' })
  transformCreatesAt() {
    return this.created_at;
  }
  constructor(partial: Partial<ReportResponseDto>) {
    Object.assign(this, partial);
  }
}
