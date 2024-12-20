import { CdkStepper } from '@angular/cdk/stepper';
import { CommonModule, CurrencyPipe, DatePipe } from '@angular/common';
import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  OnInit,
  Renderer2,
} from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { AnalysisResultModel } from './analysis-result.model';

@Component({
  selector: 'app-analysis-result',
  standalone: true,
  imports: [
    CommonModule,
    DatePipe,
    CurrencyPipe,
    MatButtonModule,
    MatProgressSpinnerModule,
  ],
  templateUrl: './analysis-result.component.html',
  styleUrl: './analysis-result.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AnalysisResultComponent implements OnInit {
  loading: boolean = true;
  analysisDate?: Date;
  result?: AnalysisResultModel;

  constructor(
    private renderer: Renderer2,
    private stepper: CdkStepper,
    private cd: ChangeDetectorRef
  ) {}

  ngOnInit(): void {
    window.setTimeout(() => {
      this.generateMockCreditAnalysis();
    }, 3500);
  }

  generateMockCreditAnalysis(): void {
    this.loading = false;
    this.renderer.removeClass(document.body, 'bg-4');

    const randomScore = Math.floor(Math.random() * 1001);
    let status = '';
    let limit = 0;

    if (randomScore < 500) {
      status = 'Inapto';
      this.renderer.addClass(document.body, 'bg-inapto');
    }

    if (randomScore >= 500 && randomScore <= 800) {
      limit = randomScore * 2;
      status = 'Apto com Limitações';
      this.renderer.addClass(document.body, 'bg-apto-limit');
    }

    if (randomScore > 800) {
      limit = randomScore * 3;
      status = 'Apto';
      this.renderer.addClass(document.body, 'bg-apto');
    }

    this.result = new AnalysisResultModel(randomScore, status, limit);
    this.analysisDate = new Date();
    this.cd.detectChanges();
  }

  resetAnalysis() {
    window.location.reload();
  }
}
