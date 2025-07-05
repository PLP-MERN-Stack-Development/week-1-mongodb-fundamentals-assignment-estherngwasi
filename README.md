[![Open in Visual Studio Code](https://classroom.github.com/assets/open-in-vscode-2e0aaae1b6195c2367325f4f02e2d04e9abb55f0b24a779b69b11b9e10269abc.svg)](https://classroom.github.com/online_ide?assignment_repo_id=19698925&assignment_repo_type=AssignmentRepo)
# MongoDB Fundamentals Assignment
# 📚 PLP Week 1 – MongoDB Fundamentals Assignment

## 👤 Submitted by:
**Esther Ngwasi**

---

## 💾 Setup Instructions

1. Clone the repository:

```bash
git clone https://github.com/PLP-MERN-Stack-Development/week-1-mongodb-fundamentals-assignment-estherngwasi.git
cd week-1-mongodb-fundamentals-assignment-estherngwasi

2. Install Dependencies
npm install
3. Set MongoDB URI in insert_books.js
Replace the URI in the file with the following:

const uri = 'mongodb+srv://esther:Esther2000@cluster0.tfjsyrw.mongodb.net/plp_bookstore?retryWrites=true&w=majority&appName=Cluster0';
✅ This connects to the plp_bookstore database hosted on MongoDB Atlas.

4. Run the Data Insertion Script
node insert_books.js
This will populate the books collection with sample documents.

📁 Files in This Repository
insert_books.js – Script to insert book data into MongoDB

queries.js – Contains all queries for CRUD, advanced queries, aggregation, and indexing

README.md – This documentation file

screenshot.png – Screenshot showing MongoDB collection and data (included manually)

✅ Tasks Completed
🔹 Task 1: MongoDB Setup
MongoDB Atlas account created

Cluster and plp_bookstore database set up

🔹 Task 2: CRUD Operations
Inserted book documents

Used find, updateOne, and deleteOne

🔹 Task 3: Advanced Queries
Filtered by multiple conditions

Projected specific fields

Sorted results

Implemented pagination using limit and skip

🔹 Task 4: Aggregation Pipelines
Grouped books by genre

Found author with most books

Grouped books by publication decade

🔹 Task 5: Indexing
Created index on title

Created compound index on author + published_year

Used explain() for performance analysis

📸 Screenshot
Screenshot included as screenshot.png, showing:

plp_bookstore database

books collection with sample documents

🧑‍💻 Tools Used
Node.js

MongoDB Atlas

VS Code

Git & GitHub

### ✅ To finalize my submission:

1. Add the screenshot file: `screenshot.png` (take it from MongoDB Atlas)
2. Save the updated `README.md`
3. In Git Bash:

```bash
git add .
git commit -m "Final submission with README and screenshot"
git push origin main

### 📸 Screenshots
Screenshot 1: Books Inserted in MongoDB Atlas
![Books Inserted](./screenshot2.PNG)

Screenshot 2: Collection View in Atlas
![Collection View](./screenshot1.PNG)
