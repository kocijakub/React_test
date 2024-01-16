import {Card} from "./Card.jsx";

export function CardList(){
    let info = [
        {
            "name": "Vegan Tofu Stir Fry",
            "timeEstimationInMinutes": 30,
            "ingredients": [
                "1 block firm tofu",
                "2 cups mixed vegetables",
                "2 cloves minced garlic",
                "1/4 cup soy sauce",
                "1 tsp sesame oil",
                "1 tbsp cornstarch"
            ],
            "difficulty": "easy",
            "isVegan": true,
            "id": "1a2b3c4d5e",
            "imageUrl": "https://via.placeholder.com/200?text='Recept'",
            "description": "This vegan stir fry dish is made with crispy tofu and a mix of colorful vegetables. It's easy to make and ready in just 30 minutes. Perfect for a quick and healthy weeknight dinner."
        },
        {
            "name": "Chicken Parmesan",
            "timeEstimationInMinutes": 45,
            "ingredients": [
                "4 boneless chicken breasts",
                "1 cup flour",
                "2 eggs",
                "2 cups breadcrumbs",
                "1 cup grated Parmesan cheese",
                "1 cup marinara sauce",
                "1 cup shredded mozzarella cheese"
            ],
            "difficulty": "medium",
            "isVegan": false,
            "id": "6f7g8h9i0j",
            "imageUrl": "https://via.placeholder.com/200?text='Recept'",
            "description": "This classic chicken dish is made with breaded and fried chicken cutlets topped with marinara sauce and melted mozzarella cheese. Serve it with a side of spaghetti for a complete meal."
        },
        {
            "name": "Spaghetti Carbonara",
            "timeEstimationInMinutes": 20,
            "ingredients": [
                "1 pound spaghetti",
                "1 cup pancetta or bacon",
                "1 cup grated Parmesan cheese",
                "4 egg yolks",
                "1/4 cup heavy cream",
                "2 cloves minced garlic",
                "Salt and pepper to taste"
            ],
            "difficulty": "hard",
            "isVegan": false,
            "id": "1k2l3m4n5o",
            "imageUrl": "https://via.placeholder.com/200?text='Recept'",
            "description": "This traditional Italian pasta dish is made with spaghetti, pancetta or bacon, grated Parmesan cheese, egg yolks, and heavy cream. It is a rich and indulgent dish that is perfect for special occasions."
        },
        {
            "name": "Grilled Steak with Garlic Butter",
            "timeEstimationInMinutes": 25,
            "ingredients": [
                "4 8-ounce ribeye steaks",
                "1/4 cup olive oil",
                "2 cloves minced garlic",
                "1/4 cup chopped parsley",
                "2 tablespoons butter",
                "Salt and pepper to taste"
            ],
            "difficulty": "medium",
            "isVegan": false,
            "id": "1p2q3r4s5t",
            "imageUrl": "https://via.placeholder.com/200?text='Recept'",
            "description": "This dish is a classic steak recipe, with garlic butter and parsley as a topping. The steak is seasoned with salt and pepper and grilled to perfection. Perfect for a special occasion or a weekend dinner."
        },
        {
            "name": "Vegan Lentil Soup",
            "timeEstimationInMinutes": 60,
            "ingredients": [
                "2 cups green lentils",
                "1 onion, diced",
                "2 cloves minced garlic",
                "1 tablespoon olive oil",
                "1 teaspoon ground cumin",
                "1 teaspoon smoked paprika",
                "1 can diced tomatoes",
                "4 cups vegetable broth",
                "1 cup chopped kale",
                "Salt and pepper to taste"
            ],
            "difficulty": "easy",
            "isVegan": true,
            "id": "6u7v8w9x0y",
            "imageUrl": "https://via.placeholder.com/200?text='Recept'",
            "description": "This vegan lentil soup is hearty and comforting, made with green lentils, diced tomatoes, and kale. It's easy to make and perfect for a cold winter day."
        },
        {
            "name": "Pesto Pasta",
            "timeEstimationInMinutes": 20,
            "ingredients": [
                "1 pound spaghetti",
                "1 cup basil pesto",
                "1/2 cup grated Parmesan cheese",
                "1/4 cup pine nuts",
                "2 cloves minced garlic",
                "Salt and pepper to taste"
            ],
            "difficulty": "easy",
            "isVegan": false,
            "id": "1z2a3b4c5d",
            "imageUrl": "https://via.placeholder.com/200?text='Recept'",
            "description": "This pasta dish is made with spaghetti, basil pesto, grated Parmesan cheese, and pine nuts. It's easy to make and ready in just 20 minutes. Perfect for a quick weeknight dinner."
        },
        {
            "name": "Vegan Chocolate Muffins",
            "timeEstimationInMinutes": 30,
            "ingredients": [
                "1 cup all-purpose flour",
                "1/2 cup sugar",
                "1/4 cup cocoa powder",
                "1 teaspoon baking powder",
                "1/4 teaspoon baking soda",
                "1/2 cup unsweetened almond milk",
                "1/4 cup vegetable oil",
                "1 teaspoon vanilla extract"
            ],
            "difficulty": "easy",
            "isVegan": true,
            "id": "1e2f3g4h5i",
            "imageUrl": "https://via.placeholder.com/200?text='Recept'",
            "description": "These vegan chocolate muffins are a delicious and easy-to-make treat. They are perfect for a breakfast or a snack and can be enjoyed warm or cold."
        },
        {
            "name": "Lemon Garlic Shrimp",
            "timeEstimationInMinutes": 20,
            "ingredients": [
                "1 pound shrimp, peeled and deveined",
                "1/4 cup olive oil",
                "2 cloves minced garlic",
                "1 lemon, juiced",
                "1/4 cup chopped parsley",
                "Salt and pepper to taste"
            ],
            "difficulty": "easy",
            "isVegan": false,
            "id": "6j7k8l9m0n",
            "imageUrl": "https://via.placeholder.com/200?text='Recept'",
            "description": "This dish is a simple and delicious way to prepare shrimp. The shrimp is sautéed in olive oil with garlic and lemon juice, and topped with parsley. It's perfect for a quick weeknight dinner or for a special occasion."
        },
        {
            "name": "Vegan Banana Bread",
            "timeEstimationInMinutes": 60,
            "ingredients": [
                "1 1/2 cups all-purpose flour",
                "1 teaspoon baking powder",
                "1/2 teaspoon baking soda",
                "1/4 teaspoon salt",
                "1/2 cup sugar",
                "1/4 cup vegetable oil",
                "2 ripe bananas, mashed",
                "1/2 cup unsweetened almond milk",
                "1 teaspoon vanilla extract"
            ],
            "difficulty": "easy",
            "isVegan": true,
            "id": "1o2p3q4r5s",
            "imageUrl": "https://via.placeholder.com/200?text='Recept'",
            "description": "This vegan banana bread is easy to make and perfect for a breakfast or a snack. It's moist and flavorful, and can be enjoyed warm or cold."
        }
    ]
    let Cards = info.map(item =>{
        return Card(item.name,item.timeEstimationInMinutes,item.ingredients,item.difficulty,item.isVegan,item.id,item.imageUrl,item.description)
    })
    return(
        <>
            <div className={'cards'}>{Cards}</div>
        </>
    )
}