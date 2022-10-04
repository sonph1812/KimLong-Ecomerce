import {Formik,Form,Field} from "formik"
function CreateCustomer() {
    const handleCreate =(valuey)=>{
        console.log(value);
    }
    return ( <div>
        <h1>Đây là trang create</h1>
        <Formik
            initialValues={{
                userName: '',
                password: '',
                confirmPassword: '',
                name: '',
                email: '',
                phone: '',
                address: '',
            }}
            onSubmit={(value)=>{
                handleCreate(value)
            }}
        >
            <Form>
                <Field type='text' name = 'userName'></Field>
                <Field type='password' name = 'password'></Field>
                <Field type='password' name = 'confirmPassword'></Field>
                <Field type='text' name = 'name'></Field>
                <Field type='text' name = 'email'></Field>
                <Field type='text' name = 'phone'></Field>
                <Field type='text' name = 'address'></Field>
                <button type="submit">
             Add
           </button>
            </Form>
        </Formik>
    </div> );
}

export default CreateCustomer;