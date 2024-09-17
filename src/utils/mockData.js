const config = [
    {
        
      "restaurant_name": "The Pasta House",
      "categories": [
        {
          "name": "Appetizers",
          "items": [
            {
              "id": 1,
              "name": "Bruschetta",
              "description": "Grilled bread with tomatoes, garlic, and olive oil",
              "price": 6.50,
              "is_vegetarian": true,
              "is_gluten_free": false
            }
          ]
        },
        {
          "name": "Main Course",
          "items": [
            {
              "id": 2,
              "name": "Spaghetti Carbonara",
              "description": "Pasta with creamy sauce, pancetta, and parmesan",
              "price": 12.99,
              "is_vegetarian": false,
              "is_gluten_free": false
            }
          ]
        },
        {
          "name": "Desserts",
          "items": [
            {
              "id": 3,
              "name": "Tiramisu",
              "description": "Classic Italian dessert with coffee and mascarpone",
              "price": 7.99,
              "is_vegetarian": true,
              "is_gluten_free": false
            }
          ]
        }
      ]
    },
    {
      "restaurant_name": "Burger Barn",
      "categories": [
        {
          "name": "Appetizers",
          "items": [
            {
              "id": 1,
              "name": "Fried Pickles",
              "description": "Crispy fried pickles with ranch dip",
              "price": 5.99,
              "is_vegetarian": true,
              "is_gluten_free": false
            }
          ]
        },
        {
          "name": "Main Course",
          "items": [
            {
              "id": 2,
              "name": "Cheeseburger",
              "description": "Grilled beef patty with cheddar cheese and fries",
              "price": 11.99,
              "is_vegetarian": false,
              "is_gluten_free": false
            }
          ]
        }
      ]
    },
    {
      "restaurant_name": "Sushi Corner",
      "categories": [
        {
          "name": "Main Course",
          "items": [
            {
              "id": 1,
              "name": "California Roll",
              "description": "Sushi roll with crab, avocado, and cucumber",
              "price": 8.99,
              "is_vegetarian": false,
              "is_gluten_free": true
            },
            {
              "id": 2,
              "name": "Spicy Tuna Roll",
              "description": "Sushi roll with tuna, spicy mayo, and cucumber",
              "price": 9.99,
              "is_vegetarian": false,
              "is_gluten_free": true
            }
          ]
        },
        {
          "name": "Beverages",
          "items": [
            {
              "id": 3,
              "name": "Green Tea",
              "description": "Hot brewed green tea",
              "price": 2.50,
              "is_vegetarian": true,
              "is_gluten_free": true
            }
          ]
        }
      ]
    },
    {
      "restaurant_name": "Pizza Palace",
      "categories": [
        {
          "name": "Main Course",
          "items": [
            {
              "id": 1,
              "name": "Pepperoni Pizza",
              "description": "Classic pizza with pepperoni and mozzarella cheese",
              "price": 14.99,
              "is_vegetarian": false,
              "is_gluten_free": false
            },
            {
              "id": 2,
              "name": "Margherita Pizza",
              "description": "Pizza with tomato, mozzarella, and basil",
              "price": 12.99,
              "is_vegetarian": true,
              "is_gluten_free": false
            }
          ]
        }
      ]
    },
    {
      "restaurant_name": "Grill Master",
      "categories": [
        {
          "name": "Main Course",
          "items": [
            {
              "id": 1,
              "name": "Grilled Ribeye Steak",
              "description": "Juicy ribeye steak served with baked potatoes",
              "price": 24.99,
              "is_vegetarian": false,
              "is_gluten_free": true
            }
          ]
        },
        {
          "name": "Desserts",
          "items": [
            {
              "id": 2,
              "name": "Cheesecake",
              "description": "Creamy cheesecake with strawberry topping",
              "price": 6.99,
              "is_vegetarian": true,
              "is_gluten_free": false
            }
          ]
        }
      ]
    },
    {
      "restaurant_name": "Café Bliss",
      "categories": [
        {
          "name": "Beverages",
          "items": [
            {
              "id": 1,
              "name": "Latte",
              "description": "Espresso with steamed milk",
              "price": 3.99,
              "is_vegetarian": true,
              "is_gluten_free": false
            },
            {
              "id": 2,
              "name": "Iced Coffee",
              "description": "Chilled coffee with ice",
              "price": 2.99,
              "is_vegetarian": true,
              "is_gluten_free": true
            }
          ]
        },
        {
          "name": "Desserts",
          "items": [
            {
              "id": 3,
              "name": "Chocolate Chip Cookie",
              "description": "Freshly baked cookie with chocolate chips",
              "price": 1.99,
              "is_vegetarian": true,
              "is_gluten_free": false
            }
          ]
        }
      ]
    },
    {
      "restaurant_name": "Taco Time",
      "categories": [
        {
          "name": "Main Course",
          "items": [
            {
              "id": 1,
              "name": "Beef Tacos",
              "description": "Soft tacos with seasoned beef, lettuce, and cheese",
              "price": 9.99,
              "is_vegetarian": false,
              "is_gluten_free": false
            },
            {
              "id": 2,
              "name": "Veggie Tacos",
              "description": "Soft tacos with grilled vegetables and salsa",
              "price": 8.99,
              "is_vegetarian": true,
              "is_gluten_free": true
            }
          ]
        }
      ]
    },
    {
      "restaurant_name": "Indian Spice",
      "categories": [
        {
          "name": "Appetizers",
          "items": [
            {
              "id": 1,
              "name": "Samosa",
              "description": "Crispy pastry filled with spiced potatoes and peas",
              "price": 4.99,
              "is_vegetarian": true,
              "is_gluten_free": false
            }
          ]
        },
        {
          "name": "Main Course",
          "items": [
            {
              "id": 2,
              "name": "Butter Chicken",
              "description": "Chicken cooked in a creamy tomato sauce",
              "price": 13.99,
              "is_vegetarian": false,
              "is_gluten_free": true
            }
          ]
        }
      ]
    },
    {
      "restaurant_name": "Chinese Garden",
      "categories": [
        {
          "name": "Main Course",
          "items": [
            {
              "id": 1,
              "name": "Sweet and Sour Chicken",
              "description": "Fried chicken with sweet and sour sauce",
              "price": 11.99,
              "is_vegetarian": false,
              "is_gluten_free": false
            },
            {
              "id": 2,
              "name": "Vegetable Stir Fry",
              "description": "Mixed vegetables stir-fried with soy sauce",
              "price": 9.99,
              "is_vegetarian": true,
              "is_gluten_free": false
            }
          ]
        }
      ]
    },
    {
      "restaurant_name": "Mexican Fiesta",
      "categories": [
        {
          "name": "Main Course",
          "items": [
            {
              "id": 1,
              "name": "Chicken Enchiladas",
              "description": "Enchiladas filled with chicken and topped with cheese",
              "price": 10.99,
              "is_vegetarian": false,
              "is_gluten_free": false
            }
          ]
        }
      ]
    },
    {
      "restaurant_name": "Breakfast Bistro",
      "categories": [
        {
          "name": "Breakfast",
          "items": [
            {
              "id": 1,
              "name": "Pancakes",
              "description": "Fluffy pancakes served with maple syrup",
              "price": 7.99,
              "is_vegetarian": true,
              "is_gluten_free": false
            }
          ]
        },
        {
          "name": "Beverages",
          "items": [
            {
              "id": 2,
              "name": "Fresh Orange Juice",
              "description": "Freshly squeezed orange juice",
              "price": 3.99,
              "is_vegetarian": true,
              "is_gluten_free": true
            }
          ]
        }
      ]
    },
    {
      "restaurant_name": "BBQ Shack",
      "categories": [
        {
          "name": "Main Course",
          "items": [
            {
              "id": 1,
              "name": "BBQ Ribs",
              "description": "Slow-cooked ribs with BBQ sauce",
              "price": 19.99,
              "is_vegetarian": false,
              "is_gluten_free": true
            }
          ]
        }
      ]
    },
    {
      "restaurant_name": "Vegan Delight",
      "categories": [
        {
          "name": "Main Course",
          "items": [
            {
              "id": 1,
              "name": "Vegan Buddha Bowl",
              "description": "Quinoa, chickpeas, avocado, and mixed greens",
              "price": 11.99,
              "is_vegetarian": true,
              "is_gluten_free": true
            }
          ]
        }
      ]
    },
    {
      "restaurant_name": "Noodle House",
      "categories": [
        {
          "name": "Main Course",
          "items": [
            {
              "id": 1,
              "name": "Pad Thai",
              "description": "Rice noodles stir-fried with tofu, peanuts, and tamarind sauce",
              "price": 10.99,
              "is_vegetarian": true,
              "is_gluten_free": true
            }
          ]
        }
      ]
    },
    {
      "restaurant_name": "Steakhouse Grill",
      "categories": [
        {
          "name": "Main Course",
          "items": [
            {
              "id": 1,
              "name": "T-Bone Steak",
              "description": "Grilled T-bone steak served with garlic butter",
              "price": 28.99,
              "is_vegetarian": false,
              "is_gluten_free": true
            }
          ]
        }
      ]
    },
    {
      "restaurant_name": "Wok Station",
      "categories": [
        {
          "name": "Main Course",
          "items": [
            {
              "id": 1,
              "name": "Chicken Fried Rice",
              "description": "Fried rice with chicken, eggs, and vegetables",
              "price": 9.99,
              "is_vegetarian": false,
              "is_gluten_free": false
            },
            {
              "id": 2,
              "name": "Vegetable Fried Rice",
              "description": "Fried rice with mixed vegetables and soy sauce",
              "price": 8.99,
              "is_vegetarian": true,
              "is_gluten_free": false
            }
          ]
        }
      ]
    }, 
    {
      "restaurant_name": "Pita Paradise",
      "categories": [
        {
          "name": "Main Course",
          "items": [
            {
              "id": 1,
              "name": "Chicken Shawarma",
              "description": "Grilled chicken wrapped in pita with garlic sauce",
              "price": 9.99,
              "is_vegetarian": false,
              "is_gluten_free": false
            },
            {
              "id": 2,
              "name": "Falafel Wrap",
              "description": "Crispy falafel wrapped in pita with hummus and veggies",
              "price": 8.99,
              "is_vegetarian": true,
              "is_gluten_free": false
            }
          ]
        }
      ]
    },
    {
      "restaurant_name": "Ramen Haven",
      "categories": [
        {
          "name": "Main Course",
          "items": [
            {
              "id": 1,
              "name": "Tonkotsu Ramen",
              "description": "Rich pork broth with noodles, egg, and chashu pork",
              "price": 12.99,
              "is_vegetarian": false,
              "is_gluten_free": false
            },
            {
              "id": 2,
              "name": "Vegetarian Ramen",
              "description": "Vegetable broth with noodles, tofu, and mushrooms",
              "price": 11.99,
              "is_vegetarian": true,
              "is_gluten_free": false
            }
          ]
        }
      ]
    },
    {
      "restaurant_name": "Fish & Chips Corner",
      "categories": [
        {
          "name": "Main Course",
          "items": [
            {
              "id": 1,
              "name": "Classic Fish & Chips",
              "description": "Crispy battered fish served with fries and tartar sauce",
              "price": 10.99,
              "is_vegetarian": false,
              "is_gluten_free": false
            }
          ]
        }
      ]
    },
    {
      "restaurant_name": "Smoothie Stop",
      "categories": [
        {
          "name": "Beverages",
          "items": [
            {
              "id": 1,
              "name": "Berry Blast Smoothie",
              "description": "Mixed berries blended with yogurt and honey",
              "price": 5.99,
              "is_vegetarian": true,
              "is_gluten_free": true
            },
            {
              "id": 2,
              "name": "Green Detox Smoothie",
              "description": "Spinach, kale, apple, and lemon blended into a refreshing drink",
              "price": 6.50,
              "is_vegetarian": true,
              "is_gluten_free": true
            }
          ]
        }
      ]
    },
    {
      "restaurant_name": "Soup Spoon",
      "categories": [
        {
          "name": "Main Course",
          "items": [
            {
              "id": 1,
              "name": "Tomato Basil Soup",
              "description": "Creamy tomato soup with fresh basil",
              "price": 4.99,
              "is_vegetarian": true,
              "is_gluten_free": true
            },
            {
              "id": 2,
              "name": "Chicken Noodle Soup",
              "description": "Classic chicken soup with noodles and vegetables",
              "price": 5.99,
              "is_vegetarian": false,
              "is_gluten_free": false
            }
          ]
        }
      ]
    }
]

export default config;