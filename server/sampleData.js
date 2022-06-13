const recipes = [
    {
        id: '1',
        name: 'Chicken Alfredo',
        description: 'A quick and easy chicken alfredo dinner with broccoli, zucchini, and red bell pepper. The sauce is enriched by cream cheese.'

    },
    {
        id: '2',
        name: 'Chicken Alfredo Casserole',
        description: 'A nice play on chicken Alfredo, easy to make and yummy to eat. My entire family enjoys it, even my 1-year-old!'

    },
    {
        id: '3',
        name: 'Tangy Broccoli',
        description: 'Cheesy broccoli with a kick!'

    },
    {
        id: '4',
        name: 'Easy Broccoli Salad',
        description: 'This simple broccoli salad kicks up ordinary broccoli with some lemon and red pepper flakes.'

    },
    {
        id: '5',
        name: 'Easy Creamy Mushrooms',
        description: 'A great recipe for wild mushrooms. You can also use store-bought mushrooms like cremini, chanterelle mushrooms, or button mushrooms. It tastes best if you have a number of different mushroom types.'

    },
    {
        id: '6',
        name: 'Marinated Portobello Mushrooms',
        description: 'Portobello mushrooms marinated in balsamic vinegar and rosemary, then grilled - these are heaven. If you don\'t have a grill, they\'re also delicious fried in a skillet. Portobello mushrooms are extremely large, dark brown mushrooms that are simply the fully mature form of the crimini mushroom, a variation of the common white mushroom.'

    },
    {
        id: '7',
        name: 'Spinach Quiche',
        description: 'About this spinach quiche: Let me start by saying that I devised the recipe myself, and I just sort of add "this and that." The recipe is very forgiving, so you can add or remove ingredients according to your taste!'

    },

]

const ingredients = [
    {
        id: '1',
        name: 'butter',
        description: 'This is the amount of butter to use',
        amount: '1 tbsp'
    },
    {
        id: '2',
        name: 'Onion',
        description: 'One chopped onion',
        amount: 'one small'
    },
    {
        id: '3',
        name: 'garlic',
        description: 'One clove of garlic',
        amount: 3
    },
    {
        id: '4',
        name: 'Chopped Spinach',
        description: 'Frozen chopped spinach',
        amount: '1 pkg'
    },
    {
        id: '5',
        name: 'Mushrooms',
        description: 'Fresh Mushrooms',
        amount: 'one can'
    },
]

module.exports = { recipes, ingredients }