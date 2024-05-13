const express = require("express");
const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();
const app = express();

// json
app.use(express.json());

// cors
app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "GET,POST,PUT,DELETE");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");
  next();
});

// test api
// app.get("/test", (req, res) => {
//   try {
//     res.status(200).json({ message: "Api is working" });
//   } catch (error) {
//     res.status(500).json({ message: error.message });
//   }
// });

// get all keyword
app.get("/keywords", async (req, res) => {
  try {
    const keywords = await prisma.keyword.findMany();
    res.status(200).json(keywords);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});


// get keyword by id
app.get("/keywords/:id", async (req, res) => {
  try {
    const keywords = await prisma.keyword.findUnique({
      where: {
        id: req.params.id,
      },
    });
    res.status(200).json(keywords);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});
// create keyword
app.post("/keyword", async (req, res) => {
  try {
    const keyword = await prisma.keyword.create({
      data: {
        name: req.body.name,
        nameen: req.body.nameen,
      },
    });
    res.status(201).json(keyword);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// update keyword
app.put("/keywords/:id", async (req, res) => {
  try {
    const keyword = await prisma.keyword.update({
      where: {
        id: req.params.id,
      },
      data: {
        name: req.body.name,
        email: req.body.email,
      },
    });
    res.status(201).json(keyword);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// delete keyword
app.delete("/keywords/:id", async (req, res) => {
  try {
    const keyword = await prisma.keyword.delete({
      where: {
        id: req.params.id,
      },
    });
    res.status(200).json(keyword);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});



// start server
const PORT = process.env.PORT || 4000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));