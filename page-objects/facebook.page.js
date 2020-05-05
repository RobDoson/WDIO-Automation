class Facebook {

    /**
     * @param {String} name 
     * @param {String} lastName 
     * @param {String} contact a valid email or phone number
     * @param {String} password minimun lenght of 8 characters
     * @param {String} birthday YYYY-MMM-DD formate date
     * @param {String} genre Male / Female checkbox 
     */
    fillRegister(name, lastName, contact, password, birthday, genre) {
        this.name().addValue(name);
        this.lastName().addValue(lastName);
        this.contact(contact);
        this.password().addValue(password);
        this.birth(birthday);
        this.genreSelect(genre);
    }

    /**
     * Returns the name field 
     */
    name(){
        return $("[name='firstname']");
    }

    /**
     * Returns the last name field
     */
    lastName(){
        return $("[name='lastname']");
    }

    /**
     * Returns and assign a value to the contact field which could be the email or a phone number
     * @param {String} details The email or the phone number
     */
    contact(details){

        $("[name='reg_email__']").addValue(details);

    }

    /**
     * Returns the password field
     */
    password(){
        return $("[name='reg_passwd__']");
    }

    /**
     * Assigns the values of each dropdown given a certain date
     * @param {String} date The date given in this format YYYY-MM-DD
     */
    birth(date){
        var day = $("[name='birthday_day']");
        var month =$("[name='birthday_month']");
        var year = $("[name='birthday_year']");
        var newDate = date.split('-').reverse();
        console.log(newDate);

        
        day.selectByVisibleText(newDate[0].match(/0\S+/g);
        month.selectByVisibleText(newDate[1].match(/0\S+/g);
        year.selectByVisibleText(newDate[2]);
    }

    /**
     * Assigns a value for one checkbox depending on the genre 
     * @param {String} genre Male or Female
     */
    genreSelect(genre){
        var final = genre == "Male" ? $("[id='u_0_7']") : $("[id='u_0_6']");
        final.click();
    }

    /**
     * Returns the register button
     */
    submitButton(){
        return $("[name='websubmit']");
    }

    test(){
        return 'Hi';
    }

}

module.exports = new Facebook();