import React from 'react'
import { Divider, Grid, Typography } from '@mui/material'

import { Logo, Link } from '@/app/components'
import { SignInForm } from '@/app/containers'
import styles from './styles.module.scss'

export default async function SignIn() {
  return (
    <Grid container className={ styles.container }>
      <Grid item className={ styles.heading }>
        <Logo size={ 160 } />
      </Grid>

      <Grid item className={ styles.title }>
        <Typography sx={ { color: 'primary.dark' } } variant="h4">
          Hi, Welcome Back
        </Typography>

        <Typography color="gray" variant="body1">
          Enter your credentials to continue
        </Typography>
      </Grid>

      <Grid item className={ styles.form }>
        <SignInForm />
      </Grid>

      <Grid item className={ styles.footer }>
        <Divider className={ styles.divider } />

        <Link href="/auth/sign-up" variant="body2">
          { 'Don\'t have an account? Sign Up' }
        </Link>

        <Link href="/" variant="body2">
          { 'Back to home' }
        </Link>
      </Grid>
    </Grid>
  )
}