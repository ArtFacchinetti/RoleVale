let data;

async function fetchData() {
    try {
        const raw = await fetch('./data.json');
        const json = await raw.json();
        data = json;
        console.log(data)
    }
    catch (err) {
        console.error('Erro ao tentar dar Fetch: ', err)
    }
}
await fetchData();

export default data;