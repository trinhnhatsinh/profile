import React from 'react'

/**
 * Close (X) icon
 *
 * @param {string} width
 * @param {string} color
 */
export const FacebookIcon = ({ width = '12' }) => {
  return (
    <svg width={width} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
      <path d="M288,176v-64c0-17.664,14.336-32,32-32h32V0h-64c-53.024,0-96,42.976-96,96v80h-64v80h64v256h96V256h64l32-80H288z"/>
    </svg>
  )
}
