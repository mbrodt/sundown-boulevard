const getDefaultState = () => {
  return {
    dish: null,
    drinks: [],
    time: null,
    email: '',
    amountOfPeople: 3,
  }
}

export const state = () => {
  return getDefaultState()
}

export const mutations = {
  addDish(state, newDish) {
    state.dish = newDish
  },
  addDrinks(state, selectedDrinks) {
    state.drinks = selectedDrinks
  },
  toggleDrink(state, clickedDrink) {
    const drinkIsSelected = state.drinks.find(
      (drink) => drink.id === clickedDrink.id
    )
    // If the drink is already selected, remove it
    if (drinkIsSelected) {
      state.drinks = state.drinks.filter(
        (drink) => drink.id !== clickedDrink.id
      )
      // If the drink is not selected, add it
    } else {
      state.drinks.push(clickedDrink)
    }
  },
  incrementAmount(state) {
    if (state.amountOfPeople < 10) {
      state.amountOfPeople += 1
    }
  },
  decrementAmount(state) {
    if (state.amountOfPeople > 1) {
      state.amountOfPeople -= 1
    }
  },
  addTime(state, time) {
    state.time = time
  },
  addEmail(state, email) {
    state.email = email
  },
  saveOrder(state) {
    // This is where we would normally save the order to the backend with an API call
    localStorage.setItem(state.email, JSON.stringify(state))
  },
  loadOrder(state, storedOrder) {
    const order = JSON.parse(storedOrder)
    Object.assign(state, order)
  },
  resetOrder(state) {
    Object.assign(state, getDefaultState())
  },
}
