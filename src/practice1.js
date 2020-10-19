const parseData = ({data, column}) => {
    let output = [];
    data.map(data => {
        let member = {};
        column.forEach((column, index) => member[column.name] = data[index]);
        output.push(member);
    });
    return output;
}
export { parseData };