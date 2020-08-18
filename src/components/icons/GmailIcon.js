import React from 'react'

/**
 * Close (X) icon
 *
 * @param {string} width
 * @param {string} color
 */
export const GmailIcon = ({ width = '12' }) => {
  return (
    <svg width={width} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
      <path d="M459,51H51C22.95,51,0,73.95,0,102v306c0,28.05,22.95,51,51,51h408c28.05,0,51-22.95,51-51V102    C510,73.95,487.05,51,459,51z M459,408h-51V183.6l-153,96.9l-153-96.9V408H51V102h30.6L255,209.1L428.4,102H459V408z" data-original="#000000" class="active-path" data-old_color="#000000"/>
    </svg>
  )
}
