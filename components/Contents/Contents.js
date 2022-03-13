
import React from 'react'
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import { test } from './test/test.js';


const markdown = `A paragraph with *emphasis* and **strong importance**.

> A block quote with ~strikethrough~ and a URL: https://reactjs.org.

* Lists
* [ ] todo
* [x] done

A table:

| a | b |
| - | - |
`

const Contents = () => {

    return (
        <ReactMarkdown children={test} remarkPlugins={[remarkGfm]} />
    );
}

export default Contents;
