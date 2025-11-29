const Bug = require("../../model/bug");

const getTrendingCategories = async (req, res) => {
  try {
    const bugs = await Bug.find();

    if (!bugs || bugs.length === 0) {
      return res.status(404).json({ message: "No bugs found" });
    }

    const categoryCount = {};
    bugs.forEach((bug) => {
      if (categoryCount[bug.category]) {
        categoryCount[bug.category]++;
      } else {
        categoryCount[bug.category] = 1;
      }
    });

    const trending = Object.entries(categoryCount)
      .map(([category, count]) => ({ category, count }))
      .sort((a, b) => b.count - a.count);

    const top3Categories = trending.slice(0, 3);

    res.status(200).json({
      message: "Top 3 categories based on number of bugs",
      data: top3Categories,
    });
  } catch (err) {
    res
      .status(500)
      .json({ message: "Something went wrong", error: err.message });
  }
};

module.exports = getTrendingCategories;
