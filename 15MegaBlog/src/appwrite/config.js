import conf from "../conf/conf";

import { Client, ID, Databases, Storage, Query } from "appwrite";

export class Service {
    client = new Client();
    databases;
    bucket;
    constructor() {
        this.client
            .setEndpoint(conf.appwriteUrl)
            .setProject(conf.appwriteProjectID);
        this.databases = new Databases(this.client);
        this.bucket = new Storage(this.client);
    }

    async createPost({ title, slug, content, featuredImage, status, userId }) {
        try {
            return await this.databases.createDocument(
                conf.appwriteDatabaseID,
                conf.appwriteCollectionId,
                slug,// document id
                {
                    title,
                    content,
                    featuredImage,
                    status,
                    userId,
                }
            )
        } catch (error) {
            console.log("Appwri8te service:: createPOst :: error",error)
        }
    }

    async updatePost(slug,{title,content,featuredImage,status}) {
        try {
            return await this.databases.updateDocument(
                conf.appwriteDatabaseID,
                conf.appwriteCollectionId,
                slug,
                {
                    title,
                    content,
                    featuredImage,
                    status,
                }
           )
        } catch (error) {
            console.log("Appwrite service :: updatePost :: error", error);
        }
    }
    async deletePost(slug) {
        try {
            await this.databases.deleteDocument(
                conf.appwriteDatabaseID,
                conf.appwriteCollectionId,
                slug
            )
            return true
        } catch (error) {
            console.log("Appwrite service :: deletePost :: error", error);
            return false
        }
    }

}


const service = new Service()
export default service