import React, { Component } from "react";
import Context from '../EmployeeContext';
import Axios from "axios";
import { URL_BASE, REVIEW, EMPLOYEE } from "../../api/config";
import firebase from "react-native-firebase";

const initState = {
    myReviews: [],
    penddingReviews: [],
    user: {}
}


/**
 *Implement context Employee and handle data
 *
 * @class EmployeeProvider
 * @extends {Component}
 * `Store`
 * @myReviews - `Array[]` all reviews employee logged;
 * @penddingReviews - `Array[]` all reviews pending my response;
 * @user - `Object` Data employee logged;
 * `Actions`
 * @getMyReviews (reset) - Call when need all reviews, pending and responded;
 * @getCurrentEmployee (pis, reset) - Call when need find employee by PIS;
 * @getPendingReview (reset) - Call when need search all reviews pending response;
 */
class EmployeeProvider extends Component {
    constructor() {
        super();
        this.state = initState

    }

    initProvider() {
        this.setState(initState)
    }

    async getMyReviews(reset) {
        reset && this.initProvider()

        try {

            let url = `${URL_BASE}${REVIEW}/${this.state.user._id}/from`
            console.log(url)
            this.setState({ myReviews: (await Axios.get(url)).data })

        } catch (err) {
            console.log(err)
        }
    }

    async getPendingReview(reset) {
        reset && this.initProvider()

        try {

            let url = `${URL_BASE}${REVIEW}/${this.state.user._id}/pending`
            console.log(url)
            this.setState({ penddingReviews: (await Axios.get(url)).data })

        } catch (err) {
            console.log(err)
        }
    }

    async getCurrentEmployee(pis, reset) {
        reset && this.initProvider()

        try {

            let url = `${URL_BASE}${REVIEW}/${pis}/pis`
            console.log(url)
            this.setState({ user: (await Axios.get(url)).data })

        } catch (err) {
            console.log(err)
        }
    }


    render() {
        console.log('Provider', this.state.cart)
        return (
            <Context.Provider value={{
                ...this.state,
                getMyReviews: (reset) => this.getMyReviews(reset),
                getPendingReview: (reset) => this.getPendingReview(reset),
                getCurrentEmployee: (pis, reset) => this.getCurrentEmployee(pis, reset)
            }}>
                {this.props.children}
            </Context.Provider>
        );
    }
}

export default EmployeeProvider;