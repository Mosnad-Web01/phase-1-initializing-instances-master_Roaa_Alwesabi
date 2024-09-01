// تعريف فئة الفطور
class Breakfast {
    constructor(food, drink) {
      this.food = food;
      this.drink = drink;
    }
  }
  
  // تعريف فئة الغداء
  class Lunch {
    constructor(salad, soup, drink) {
      this.salad = salad;
      this.soup = soup;
      this.drink = drink;
    }
  }
  
  // تعريف فئة العشاء
  class Dinner {
    // تعريف الخاصية الخاصة #dessert
    #dessert;
    
    constructor(salad, soup, entree, dessert) {
      this.salad = salad;
      this.soup = soup;
      this.entree = entree;
      // تعيين قيمة الخاصية الخاصة
      this.#dessert = dessert;
    }
  
    // دالة لإرجاع قيمة الخاصية الخاصة
    getDessert() {
      return this.#dessert;
    }
  }
  
  // إنشاء أمثلة من الفئات
  let breakfast = new Breakfast("Pancakes", "Coffee");
  let lunch = new Lunch("Caesar Salad", "Tomato Soup", "Lemonade");
  let dinner = new Dinner("Greek Salad", "Mushroom Soup", "Steak", "Cheesecake");
  
  // طباعة النتائج
  console.log(breakfast); // Breakfast { food: 'Pancakes', drink: 'Coffee' }
  console.log(lunch); // Lunch { salad: 'Caesar Salad', soup: 'Tomato Soup', drink: 'Lemonade' }
  console.log(dinner); // Dinner { salad: 'Greek Salad', soup: 'Mushroom Soup', entree: 'Steak' }
  console.log(dinner.getDessert()); // Cheesecake
  