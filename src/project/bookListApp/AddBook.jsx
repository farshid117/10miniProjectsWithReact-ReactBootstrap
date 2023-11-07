import React, { Component } from 'react'
import { Helmet } from 'react-helmet-async'
import { Link } from 'react-router-dom'

import { Book, Header2 } from '../../project'

class AddBook extends Component {
    state = {
        name: "",
        author: "",
        year: "",

        books: [],

    }

    onChangeHandler(event) {
        this.setState({ [event.target.name]: event.target.value })

    }
    onSubmitHandler(event) {
        event.preventDefault()
        const {name, author, year, books} = this.state
        if (!name || !author || !year) {
            alert("لطفا تمامی فیلدها را پر نمائید")
        } else {
            this.setState({
                books: [...books, {
                                    id: books.length + 1,
                                    name: name,
                                    author, //✍️ ES6
                                    year
                                  }
                ]
            })

            this.setState({ name: "", author: "", year: "" })

        }
    }
    render() {
        return (
            <div className='AddBook mt-3'>
                <Helmet>
                    <title>کتابخانه | 10 مینی پروژه ری‌اکت</title>
                </Helmet>
                <Header2 />
                <div className='container position-relative'>
                    <div className='text-end position-absolute top-0 end-0'>
                        <Link to="/" className='btn btn-warning'>خانه</Link>
                    </div>
                </div>
                <div className='d-flex flex-column align-items-center'>
                    <div className='card myCard  w-75 h-auto'>
                        <div className="card-body">
                            <form onSubmit={(event) => this.onSubmitHandler(event)}>
                                <div className="container">
                                    <div className="row justify-content-center" style={{ fontSize: 13, fontWeight: "bold", color: "whitesmoke" }}>
                                        <div className="col-12 col-md-10 " >
                                            <div className="row  align-items-center mt-1 mt-md-3 justify-content-center">
                                                <div className="d-none d-lg-block col-2">
                                                    <label htmlFor="input1" className="col-form-label">نام کتاب :</label>
                                                </div>
                                                <div className="col-md-9 col-lg-8">
                                                    <input type="text" id="input1" className="form-control" placeholder='نام کتاب'
                                                        name="name"
                                                        value={this.state.name}
                                                        onChange={(event) => this.onChangeHandler(event)}
                                                    />
                                                </div>
                                            </div>
                                            <div className="row  align-items-center justify-content-center mt-1 mt-md-3">
                                                <div className="d-none d-lg-block col-2">
                                                    <label htmlFor="input2" className="col-form-label"> نویسنده  :</label>
                                                </div>
                                                <div className="col-md-9 col-lg-8">
                                                    <input type="text" id="input2" className="form-control" placeholder='نویسنده'
                                                        name="author"
                                                        value={this.state.author}
                                                        onChange={(event) => this.onChangeHandler(event)}
                                                    />
                                                </div>
                                            </div>
                                            <div className="row  align-items-center justify-content-center mt-1 mt-md-3">
                                                <div className="d-none d-lg-block col-2">
                                                    <label htmlFor="input3" className="col-form-label"> سال تالیف :</label>
                                                </div>
                                                <div className="col-md-9 col-lg-8">
                                                    <input type="text" id="input3" className="form-control" placeholder='سال تالیف'
                                                        name="year"
                                                        value={this.state.year}
                                                        onChange={(event) => this.onChangeHandler(event)}
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-9 d-grid text-center mt-4">
                                            <button className="btn btn-warning">افزودن کتاب</button>
                                        </div>
                                    </div>
                                </div>

                            </form>
                        </div>
                    </div>
                </div>
                <div className='d-flex flex-column align-items-center mt-3'>
                    <div className='card w-75 h-auto text-center'>
                        <table className='table table-striped'>
                            <thead>
                                <tr>
                                    <th>ردیف</th>
                                    <td className='fw-bold'>نام کتاب</td>
                                    <td className='fw-bold'>نویسنده</td>
                                    <td className='fw-bold'>سال تالیف</td>
                                </tr>
                            </thead>
                            <tbody>
                                {

                                    this.state.books.map((book) => (
                                        <Book key={book.id} {...book} />
                                    ))
                                }
                            </tbody>
                        </table>
                    </div>
                </div>



            </div >
        );
    }
}

export default AddBook;