// import Head from 'next/head'
// import Image from 'next/image'
// import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import MyComp from './qcomps/firstcomp'
import Bio from './qcomps/bios'
import ToDo from './qcomps/todos'
import Profile from './components/profile_props'
import Gallery from './qcomps/gallery_props'
import PackingList from './qcomps/props_item'
import List  from './qcomps/list_keys_id'
import RecipeList from './qcomps/recipes'
import WhyState from './components/whyState'
import State from './qcomps/state'
import PersonData from './components/stateObj'
import StuckForm from './qcomps/shoppingCart'
import Form from './components/queueUpdates'

export default function Home() {
  return (
    <div className={styles.main}>
        <StuckForm/>
    </div>
  )
}
