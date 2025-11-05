# Insurance Premium Calculator

This project calculates the monthly life insurance premium based on the user’s age next birthday, occupation risk category, and death sum insured. The goal was to implement the formula clearly and demonstrate clean coding practices with meaningful Git commit history.

The application is implemented using **Angular Standalone Components** with **Reactive Forms**.

---

## 🧮 Premium Formula

Monthly Premium = (Death Cover Amount × Rating Factor × Age Next Birthday) / 1000 × 12

---

## 👷 Occupation Rating Factors

| Occupation | Rating       | Factor |
| ---------- | ------------ | ------ |
| Doctor     | Professional | 1.5    |
| Author     | White Collar | 2.25   |
| Cleaner    | Light Manual | 11.50  |
| Florist    | Light Manual | 11.50  |
| Farmer     | Heavy Manual | 31.75  |
| Mechanic   | Heavy Manual | 31.75  |
| Other      | Heavy Manual | 31.75  |

---

## 🎯 Features Implemented

- Angular Reactive Form with validation for all fields
- Automatic premium calculation triggered when occupation changes
- Clean and simple UI layout
- Code structured to be easy to read and extend

---

## 🗄 Conceptual Database Design (If Extended Later)

Table: Occupation

OccupationId INT (PK)
OccupationName VARCHAR
Rating VARCHAR
Factor DECIMAL(10,2)

Table: Member

MemberId INT (PK)
Name VARCHAR
AgeNextBirthday INT
DOB_MonthYear CHAR(7) -- Format: mm/YYYY
OccupationId INT (FK → Occupation.OccupationId)
DeathSumInsured DECIMAL(18,2)
MonthlyPremium DECIMAL(18,2)

---

## 🚀 Running the Application

```bash
npm install
npm start
```

✅ Assumptions

Age Next Birthday is manually entered by the user (not calculated from DOB).

DOB is captured in mm/YYYY format as required.

Occupation list and factor values are static and based on the specification.

No backend persistence is required for this iteration.
