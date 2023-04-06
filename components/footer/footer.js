import Link from 'next/link'
import React from 'react'
import styles from './style.module.css' 
function footer() {
  return (
    <footer className={styles.footer}>
        <Link href="/">Kübra Tanrıkulu</Link>
    </footer>
  )
}

export default footer