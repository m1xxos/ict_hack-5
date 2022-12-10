async def create_one(name, collection):
    document = name
    result = await collection.insert_one(document)
    check = await collection.find_one({"_id": result.inserted_id}, {"_id": 0})
    return check


async def fetch_all(limit, skip, collection, model):
    cpus = []

    cursor = collection.find({}).limit(limit).skip(skip)
    amount = await collection.count_documents({})
    async for document in cursor:
        cpus.append(model(**document))
    return amount, cpus


async def fetch_one(base_id, collection, model):
    find_string = {"_id": base_id}
    document = False
    cursor = collection.find(find_string)
    async for document in cursor:
        document = model(**document)
    return document
