export function counterReducer(state, action) {
    if (action.type === "ADD") {
      const newCount = state.count++
      // console.log(newCount)
      return {
        count: newCount
      };
    }
    if (action.type === "SUBTRACT") {
      if (state.count < 1) {
        return {
          count: 0,
        };
      } else {
        const newCount = state.count--
        // console.log(newCount)
        return {
          count: newCount
        };
      }
    }
    if (action.type === "RESET") {
      return {
        count: 0,
      };
    }
    return state;
  }