export default function produtos(request, response) {
    const id = request.query.id;

    response.json({
        id
    });
}