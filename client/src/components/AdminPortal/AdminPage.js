import React, { useState, useEffect } from 'react';
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import FileBase from 'react-file-base64';
import { useDispatch, useSelector } from 'react-redux';
import { createPost } from '../../actions/posts';
import './styles.css';

const AdminPage = () => {

    const [postData, setPostData] = useState({ title: '', body: '', creator: '', tags: '', selectedFile: '' })
    const dispatch = useDispatch()

    const handleSubmit = (e) => {
        e.preventDefault()

        dispatch(createPost(postData))
        clear()
    }

    const clear = () => {
        setPostData({ title: '', body: '', creator: '', tags: '', selectedFile: '' })
    }

    return (
        <div className="container">
            <h1>Add New Event</h1>
            <p>These events will be displayed in the events page.</p>
            <hr />
            <Form onSubmit={handleSubmit}>
                <FormGroup>
                    <Label for="name">Creator</Label>
                    <Input type="name" name="name" id="name" value={postData.creator} onChange={(e) => setPostData({ ...postData, creator: e.target.value })} />
                </FormGroup>
                <FormGroup>
                    <Label>Title</Label>
                    <Input type="heading" name="heading" value={postData.title} onChange={(e) => setPostData({ ...postData, title: e.target.value })} />
                </FormGroup>
                <FormGroup>
                    <Label for="exampleText">Body</Label>
                    <Input type="textarea" name="text" value={postData.body} onChange={(e) => setPostData({ ...postData, body: e.target.value })} />
                </FormGroup>
                <FormGroup>
                    <Label>Tags (Separated by commas for now. Ex. drugs,sex,alcohol)</Label>
                    <Input type="tags" name="tags" value={postData.tags} onChange={(e) => setPostData({ ...postData, tags: e.target.value.split(',') })} />
                </FormGroup>
                <div>
                    <FileBase
                        type="file"
                        multiple={false}
                        onDone={({ base64 }) => setPostData({ ...postData, selectedFile: base64 })}
                    />
                </div>
                <Button>Submit</Button>
                <Button color="secondary" onClick={clear} >Clear</Button>
            </Form>
        </div>

    );
}

export default AdminPage;

/* For the NavBar:

<NavItem>
    <NavLink href="/AdminPage">Admin Portal</NavLink>
</NavItem>

*/