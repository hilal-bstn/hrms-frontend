import React, { Component } from 'react'
import {
  Button,
  Checkbox,
  Form,
  Input,
  Radio,
  Select,
  TextArea,
} from 'semantic-ui-react'
export default function EmployerJobPostingAddForm() {
    return (
        <div>
        <Form>
        <Form.Group widths='equal'>
        <Form.Field
            control={Select}
            label='Şehir'
            placeholder='Şehir Seçiniz'
          />
          <Form.Field
            control={Input}
            label='Pozisyon'
            placeholder='Pozisyon'
          />
           <Form.Field
          control={TextArea}
          label='İş Tanımı'
          placeholder='Tell us more about you...'
        />
          <Form.Field
            control={Input}
            label='Minimum Maaş'
            placeholder='opsiyonel'
          />
          <Form.Field
            control={Input}
            label='Maximum Maaş'
            placeholder='opsiyonel'
          />
          <Form.Field
            control={Input}
            label='Son Başvuru Tarihi'
            
          />
        </Form.Group>
       
       
        <Form.Field control={Button}>Submit</Form.Field>
      </Form>
      </div>
    )
}
