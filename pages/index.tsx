import * as React from 'react'
import Head from 'next/head'
import { useForm } from 'react-hook-form'

export default function Home() {
  const { register, handleSubmit } = useForm()

  const onSubmit = (data: any) => alert(JSON.stringify(data))

  return (
    <div>
      <Head>
        <title>Intl.DateTimeFormat Playground</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <form onSubmit={handleSubmit(onSubmit)}>
        <label>
          <span>YYYY/MM/DD hh:mm</span>
          <input type="text" name="date" ref={register} />
        </label>
        <label>
          <span>Date Time</span>
          <span></span>
        </label>
        <label>
          <span>Locale</span>
          <input type="text" name="locale" ref={register} />
        </label>
        <label>
          <span>Year</span>
          <input type="text" name="year" ref={register} />
        </label>
        <label>
          <span>Month</span>
          <input type="text" name="month" ref={register} />
        </label>
        <label>
          <span>Day</span>
          <input type="text" name="day" ref={register} />
        </label>
        <label>
          <span>Weekday</span>
          <input type="text" name="weekday" ref={register} />
        </label>
        <label>
          <span>Hour</span>
          <input type="text" name="hour" ref={register} />
        </label>
        <label>
          <span>Minute</span>
          <input type="text" name="minute" ref={register} />
        </label>
        <label>
          <span>HourCycle</span>
          <input
            type="radio"
            name="hourCycle"
            value="24h"
            ref={register}
            defaultChecked
          />
          <input type="radio" name="hourCycle" value="12h" ref={register} />
        </label>

        <label>
          <span>Format</span>
          <input type="submit" />
        </label>
      </form>
    </div>
  )
}
