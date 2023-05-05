"use client"

import React, { useState } from "react"
import { signIn } from "next-auth/react"

export default function page() {
  async function loginWithGoogle() {
    setIsLoading(true)
    try {
      await signIn()
    } catch (error) {
      toast.error("Something went wrong with login")
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <>
      <div className="flex min-h-full items-center justify-center py-12 px-4 sm:px-6 ls:px-8">
        <div className="w-full flex flex-col items-center max-w-md space-y-8">
          <form name="contact" method="POST" className="w-full px-6 md:px-0">
            <input type="hidden" name="contact" value="contact" />
            <div>
              <label htmlFor="username">Username</label>
              <input name="username" id="username" type="text" />
            </div>
            <div>
              <label htmlFor="password">Password</label>
              <input name="password" id="password" type="password" />
            </div>
            <div>
              <button
                type="submit"
                onClick={() => signIn()}
                className="w-auto btn btn-primary"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  )
}
