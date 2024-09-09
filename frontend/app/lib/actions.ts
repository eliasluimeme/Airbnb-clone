'use server'

import { cookies } from "next/headers"

// export async function handleRefresh() {
//     const refreshToken = await getRefreshToken()

//     const token = await fetch(`${process.env.NEXT_PUBLIC_API_HOST}/api/auth/token/refresh`, {
//         method: 'POST',
//         body: JSON.stringify({refresh: refreshToken}),
//         headers: {
//             'Accept': 'application/json',
//             'Content-Type': 'application/json',
//         }
//     })
//     .then(response => response.json())
//     .then((json) => {
//         console.log('refreshhh:', json)
//         if (json.access) {
//             cookies().set('session_access_token', json.access, {
//                 httpOnly: true,
//                 secure: process.env.NODE_ENV === 'production',
//                 maxAge: 60 * 60,
//                 path: '/',
//             })

//             return json.access
//         } else 
//             resetAuthCookies()
//     })
//     .catch((error) => {
//         console.error('Error:', error)
//         resetAuthCookies()
//     })

//     return token
// }

export async function handleRefresh() {
    const refreshToken = cookies().get('session_refresh_token')?.value
  
    if (!refreshToken) {
      console.error('No refresh token available')
      setAuthResetNeeded()
      return null
    }
  
    try {
      const response = await fetch(`${process.env.NEXT_PUBLIC_API_HOST}/api/auth/token/refresh`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Referer': process.env.NEXT_PUBLIC_FRONTEND_URL || 'http://localhost:3000',
        },
        body: JSON.stringify({ refresh: refreshToken }),
      })
  
      if (!response.ok) {
        const errorText = await response.text()
        console.error('Token refresh failed:', response.status, errorText)
        setAuthResetNeeded()
        return null
      }
  
      const data = await response.json()
  
      if (data.access) {
        return data.access
      } else {
        console.error('Refresh response did not include access token')
        setAuthResetNeeded()
        return null
      }
    } catch (error) {
      console.error('Error during token refresh:', error)
      setAuthResetNeeded()
      return null
    }
}

export async function handleLogin(userId: string, accessToken: string, refreshToken: string) {
    cookies().set('session_userid', userId, {
        httpOnly: true,
        secure: process.env.NODE_ENV === 'production',
        maxAge: 60 * 60 * 24 * 7,
        path: '/',
    })

    cookies().set('session_access_token', accessToken, {
        httpOnly: true,
        secure: process.env.NODE_ENV === 'production',
        maxAge: 60 * 60, // 60min
        path: '/',
    })
    
    cookies().set('session_refresh_token', refreshToken, {
        httpOnly: true,
        secure: process.env.NODE_ENV === 'production',
        maxAge: 60 * 60 * 24 * 7, // 1week
        path: '/',
    })
}

// export async function resetAuthCookies() {
//     cookies().set('session_userid', '', { maxAge: 0 })
//     cookies().set('session_access_token', '', { maxAge: 0 })
//     cookies().set('session_refresh_token', '', { maxAge: 0 })
//   }

export async function getUserId() {
    const userId = cookies().get('session_userid')?.value
    return userId ? userId : null 
}

export async function getAccessToken() {
    let accessToken = cookies().get('session_access_token')?.value
    
    return accessToken
  }

export async function getRefreshToken() {
    const refreshToken = cookies().get('session_refresh_token')?.value
    return refreshToken
}

let authResetNeeded = false;

export async function setAuthResetNeeded() {
  authResetNeeded = true;
}

export async function getAuthResetNeeded() {
  return authResetNeeded;
}

export async function resetAuthCookies() {
  setAuthResetNeeded();
}

export async function performAuthReset() {
    // if (getAuthResetNeeded()) {
      cookies().set('session_userid', '', { maxAge: 0 })
      cookies().set('session_access_token', '', { maxAge: 0 })
      cookies().set('session_refresh_token', '', { maxAge: 0 })
      return true
    // }
    return false
  }