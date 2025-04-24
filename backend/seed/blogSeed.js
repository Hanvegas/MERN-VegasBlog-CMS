const mongoose = require('mongoose')
const Blog = require('../models/blog')

mongoose.connect('mongodb://127.0.0.1/blog-cms')
      .then(() => console.log("Connected to MongoDB"))
      .catch((err) => console.log(err))


async function seedBlog() {
      const today = new Date()
      const options = { day: '2-digit', month: 'short', year: 'numeric' }
      const formatted = today.toLocaleDateString('en-GB', options)

      const blogs = [
            {
                  title: "Unveiling the secret beyond the tourist trails",
                  description: "dive into the local culture, discover hidden spots, experience the authentic charm that often will be peacefull",
                  date: formatted
            },
            {
                  title: "Unveiling the secret beyond the tourist trails",
                  description: "dive into the local culture, discover hidden spots, experience the authentic charm that often will be peacefull",
                  date: formatted
            },
            {
                  title: "Unveiling the secret beyond the tourist trails",
                  description: "dive into the local culture, discover hidden spots, experience the authentic charm that often will be peacefull",
                  date: formatted
            },
            {
                  title: "Unveiling the secret beyond the tourist trails",
                  description: "dive into the local culture, discover hidden spots, experience the authentic charm that often will be peacefull",
                  date: formatted
            },
            {
                  title: "Unveiling the secret beyond the tourist trails",
                  description: "dive into the local culture, discover hidden spots, experience the authentic charm that often will be peacefull",
                  date: formatted
            },
            {
                  title: "Unveiling the secret beyond the tourist trails",
                  description: "dive into the local culture, discover hidden spots, experience the authentic charm that often will be peacefull",
                  date: formatted
            },
            {
                  title: "Unveiling the secret beyond the tourist trails",
                  description: "dive into the local culture, discover hidden spots, experience the authentic charm that often will be peacefull",
                  date: formatted
            },
            {
                  title: "Unveiling the secret beyond the tourist trails",
                  description: "dive into the local culture, discover hidden spots, experience the authentic charm that often will be peacefull",
                  date: formatted
            },
            {
                  title: "Unveiling the secret beyond the tourist trails",
                  description: "dive into the local culture, discover hidden spots, experience the authentic charm that often will be peacefull",
                  date: formatted
            },
            {
                  title: "Unveiling the secret beyond the tourist trails",
                  description: "dive into the local culture, discover hidden spots, experience the authentic charm that often will be peacefull",
                  date: formatted
            },
            {
                  title: "Unveiling the secret beyond the tourist trails",
                  description: "dive into the local culture, discover hidden spots, experience the authentic charm that often will be peacefull",
                  date: formatted
            },
            {
                  title: "Unveiling the secret beyond the tourist trails",
                  description: "dive into the local culture, discover hidden spots, experience the authentic charm that often will be peacefull",
                  date: formatted
            },
            {
                  title: "Unveiling the secret beyond the tourist trails",
                  description: "dive into the local culture, discover hidden spots, experience the authentic charm that often will be peacefull",
                  date: formatted
            }
      ]

      try {
            await Blog.deleteMany({})
            await Blog.insertMany(blogs)
            console.log("Berhasil Disimpan")
      } catch (error) {
            console.log("error Masukin data", error)
      }
}

seedBlog()
