import {createSlice} from "@reduxjs/toolkit";


const initialState = {
  filtered_products: [],
  all_products: [],
  grid_view: true,
  sort: 'price-lowest',
  filters: {
    text: '',
    company: 'all',
    category: 'all',
    color: 'all',
    price: 0,
    max_price:2000000,
    min_price:0,
    shipping: false
  }
};
import {
  LOAD_PRODUCTS,
  SET_GRIDVIEW,
  SET_LISTVIEW,
  UPDATE_SORT,
  SORT_PRODUCTS,
  UPDATE_FILTERS,
  FILTER_PRODUCTS,
  CLEAR_FILTERS,
} from '../actions'
import { useProductsContext } from './products_context'


const FilterContext = React.createContext()

const cartSlice = createSlice({ 
  name: 'cart',
  initialState,
  reducers: {}
})

export const FilterProvider = ({ children }) => {
  const [state, dispatch] = useReducer(filter_reducer, initialState)
  const {products} = useProductsContext()

  const updateFilters = (e) => {
      let name = e.target.name
      let value = e.target.value    
      if(name === 'category'){
          value = e.target.textContent
      } 
      if(name ==='color'){
         value = e.target.getAttribute('data-color')
      }
      if(name === 'price'){
          value = Number(value)
      }
      if(name === 'shipping'){
          value = e.target.checked
      }
      dispatch({type:UPDATE_FILTERS, payload: {name, value}})
  }

  const clearFilters = () => {
     dispatch({type: CLEAR_FILTERS})
  }

  const updateSort = (e) => {
   // const name = e.target.name 
    const value = e.target.value
    dispatch({type:UPDATE_SORT, payload: value})
  }

  useEffect(() => {
     dispatch({type: LOAD_PRODUCTS, payload:products})
  }, [products])


  useEffect(() => {
    dispatch({type: FILTER_PRODUCTS})
    dispatch({type: SORT_PRODUCTS})
  }, [products, state.sort, state.filters])

  
  const setGridView = () => {  
    dispatch({type: SET_GRIDVIEW})
  }

  const setListView = () => {
    dispatch({type: SET_LISTVIEW})
  }

  return(
    <FilterContext.Provider value={{
      ...state,
      setGridView,
      setListView,
      updateSort,
      updateFilters,
      clearFilters
    }}
      >
      {children}
    </FilterContext.Provider>
  )
}
// make sure use
export const useFilterContext = () => {
  return useContext(FilterContext)
}
