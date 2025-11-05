import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, Validators, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './app.html',
  styleUrls: ['./app.scss'], // ✅ IMPORTANT: plural, not styleUrl
})
export class App {
  occupations = [
    { name: 'Doctor', rating: 'Professional', factor: 1.5 },
    { name: 'Author', rating: 'White Collar', factor: 2.25 },
    { name: 'Cleaner', rating: 'Light Manual', factor: 11.5 },
    { name: 'Florist', rating: 'Light Manual', factor: 11.5 },
    { name: 'Farmer', rating: 'Heavy Manual', factor: 31.75 },
    { name: 'Mechanic', rating: 'Heavy Manual', factor: 31.75 },
    { name: 'Other', rating: 'Heavy Manual', factor: 31.75 },
  ];

  monthlyPremium: number | null = null;
  form!: FormGroup;

  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      name: ['', Validators.required],
      age: [null, [Validators.required, Validators.min(1)]],
      dob: ['', Validators.required],
      occupation: ['', Validators.required],
      deathCover: [null, [Validators.required, Validators.min(1)]],
    });
  }

  calculatePremium() {
    if (this.form.valid) {
      const { deathCover, age, occupation } = this.form.value;
      const occ = this.occupations.find((o) => o.name === occupation);

      if (occ) {
        // Formula: (Sum Insured * Factor * Age) / 1000 * 12
        this.monthlyPremium = ((Number(deathCover) * occ.factor * Number(age)) / 1000) * 12;

        // Round to 2 decimals (optional):
        this.monthlyPremium = Math.round(this.monthlyPremium * 100) / 100;
      }
    }
  }
}
