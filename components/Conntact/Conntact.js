import {
  Section,
  SectionDivider,
  SectionTitle,
  SectionText,
} from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import emailjs from 'emailjs-com';
import MessageConfirm from './MessageConfirm';
import { Form, Input, FormGroup, Textarea } from './ConntactStyled';
import { useEffect, useRef, useState } from 'react';

const Conntact = () => {
  const [send, setSend] = useState(false);
  const formRef = useRef();

  useEffect(() => {
    if (send === true) {
      setTimeout(() => {
        setSend(false);
      }, 2000);
    }
  }, [send]);

  const handleSumbit = async e => {
    e.preventDefault();

    try {
      const res = await emailjs.sendForm(
        'service_t4z8re8',
        'template_3ql7av8',
        formRef.current,
        'user_XuX8KdjO5cQkAVLdudOWo'
      );

      console.log(res.text);
    } catch (err) {
      console.log(err.message);
    }

    e.target.reset();
    setSend(true);
  };

  return (
    <Section nopadding style={{ marginBottom: 50 }} id='conntact'>
      <SectionDivider />
      <SectionTitle main>Conntact</SectionTitle>

      {send && <MessageConfirm />}

      <Form ref={formRef} onSubmit={handleSumbit}>
        <fieldset>
          <legend>Feel free to message me.</legend>
          <FormGroup>
            <label>Email</label>
            <Input
              type='email'
              placeholder='Enter your email...'
              required
              name='from_name'
            />
          </FormGroup>
          <FormGroup>
            <label>Message</label>
            <Textarea
              placeholder='Write your message...'
              name='message'
              required
            />
          </FormGroup>

          <Button type='submit'>Send</Button>
        </fieldset>
      </Form>
    </Section>
  );
};

export default Conntact;
