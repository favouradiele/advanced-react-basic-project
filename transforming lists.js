const data = [{
    title:"tirimasiu",
    description: "the best tirimasiu in town",
    image: "./logo.svg",
    price: "$5.00",
  },
  {
    id: "2",
    title: "lemon ice cream",
    description: "mind blowing taste",
    image: "./logo.svg",
    price: "$4.50",
  },
  {
    id: "3",
    title: "lemon ",
    description: "mind taste",
    image: "./logo.svg",
    price: "$7.50",
  },
  ]
  
  const topDesert = data.map(dessert => {
    return {
      content: `${dessert.title} - ${dessert.description}`,
      price: dessert.price,
    }
  })

  console.log(topDesert);