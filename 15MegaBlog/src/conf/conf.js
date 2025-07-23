// config variable env variable
//only for good practices
//
const conf = {
    appwriteUrl:String(import.meta.env.VITE_APPWRITE_URL),
    appwriteProjectID:String(import.meta.env.VITE_PROJECT_ID),
    appwriteDatabaseID:String(import.meta.env.VITE_DATABASE_ID),
    appwriteCollectionId:String(import.meta.env.VITE_COLLECTION_ID),
    appwriteBucketID:String(import.meta.env.VITE_BUCKET_ID),
}
//guarantee return string
export default conf