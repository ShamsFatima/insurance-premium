# Insurance Premium Calculator

This application allows a user to calculate the monthly life insurance premium based on age next birthday, occupation risk factor, and death cover amount.

The solution is built using **Angular (Standalone Components)** and **Reactive Forms**.

---

## 🧮 Premium Formula

---

## 👷 Occupation Rating Table

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

- Angular Reactive Form with validation for all input fields
- Auto-calculation of premium when occupation dropdown changes
- Clean UI layout with easy readability
- Error-prevention through validation rules

---

## 🗄 Database Design (Conceptual — No actual DB required)

Table: Occupation

OccupationId (PK) INT
OccupationName VARCHAR
Rating VARCHAR
Factor DECIMAL(10,2)

Table: Member

MemberId (PK) INT
Name VARCHAR
AgeNextBirthday INT
DOB_MonthYear CHAR(7) -- Format: mm/YYYY
OccupationId (FK) INT -- References Occupation.OccupationId
DeathSumInsured DECIMAL(18,2)
MonthlyPremium DECIMAL(18,2)

---

## 🚀 How to Run the Project

```bash
npm install
npm start
```

http://localhost:4200/
✅ Assumptions & Clarifications

Age Next Birthday is entered directly by the user (not automatically derived from DOB).

DOB stored and displayed as mm/YYYY format only.

Occupation list and rating factors are static and taken directly from the requirement.

No backend or persistence layer is required for this submission — only UI logic.
