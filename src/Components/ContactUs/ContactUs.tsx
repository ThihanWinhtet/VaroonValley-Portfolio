import { zodResolver } from "@hookform/resolvers/zod";
import { FieldValues, useForm } from 'react-hook-form'
import './ContactUs.css'
import { z } from 'zod';

const ContactUs = () => {


  let scheme = z.object({
    mail : z.string().min(1, {message : 'This Field has to be failed.'})
    .email("This is not a valid email."),
    name: z
      .string()
      .min(3, { message: "Name must be at least  3 characters." }),
    message: z.string().min(3, {message : 'This Field has to be failed.'})
  });
  type FormData = z.infer<typeof scheme>;
  let {register, handleSubmit, formState : {errors},} = useForm<FormData>({ resolver : zodResolver(scheme) });

  let getData = (data: FieldValues) => {
    console.log(data);
  };

  return (
    <>
    <div className="contact pd2" id='contact'>
        <div className="cu_content_title">
          <small>CONTACT</small>
          <h1>Any questions? <br /> Write or call us.</h1>
          <small> <a href="tel:+959257902790">(+95) 9222222222</a> </small> <br />
          <small> <a href="mailto:thihanwinhtet1999@gmail.com"> varoonvalley@office.com </a></small>
        </div>
        <div className="cu_main">
            <form onSubmit={handleSubmit(getData)
            }>
                <input {...register('mail')} type="text" placeholder="E-mail address"/>
                {errors.mail && (
                  <p className=""> {errors.mail.message} </p>
                )}
                <input {...register('name')} type="text" placeholder="Your name"/>
                {errors.name && (
                  <p className=""> {errors.name.message} </p>
                )}
                <input {...register('message')} type="text" style={{paddingBottom : '100px'}} placeholder="Message"/>
                {errors.message && (
                  <p className=""> {errors.message.message} </p>
                )}
                <button >Send</button>
            </form>
        </div>
    </div>
    </>
  )
}

export default ContactUs