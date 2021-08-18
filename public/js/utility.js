const convertDate = (date) => {
    moment.locale('mn');
    let momentDate = moment(date)
    momentDate.locale('mn')
    let a = momentDate.format('lll')
    return a
}