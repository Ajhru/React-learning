import DataBase from "../envData/DataBase"
import { Client, ID, Storage, Databases, Query } from "appwrite"


export class StorageService {
    client = new Client();
    databases;
    buket;

    constructor() {
        this.client
            .setEndpoint(DataBase.appwriteURL)
            .setProject(DataBase.projectId);
        this.databases = new Databases(this.client);
        this.buket = new Storage(this.client);
    }

    async CreatePost({ tittle, slug, content, featuredImage, userId, status }) {
        try {
            return await this.databases.createDocument(
                DataBase.databaseId,
                DataBase.collectionId,
                slug,
                {
                    tittle,
                    content,
                    userId,
                    status,
                    featuredImage

                }
            )
        } catch (error) {
            console.log("AppWrite :: Createpost :: error", error);

        }
    }

    async updatePost(slug, { tittle, content, featuredImage, status }) {
        try {
            return this.databases.updateDocument(
                DataBase.databaseId,
                DataBase.collectionId,
                slug,
                {
                    tittle,
                    featuredImage,
                    status,
                    content
                }
            )
        } catch (error) {
            console.log("AppWrite :: updatePost :: error", error);
        }

    }

    async deletePost(slug) {
        try {
            await this.databases.deleteDocument(
                DataBase.databaseId,
                DataBase.collectionId,
                slug,
            )
            return true

        } catch (error) {
            console.log("AppWrite :: deletePost :: error", error);
            return false
        }
    }


    async getPost(slug) {
        try {
            await this.databases.getDocument(
                DataBase.databaseId,
                DataBase.collectionId,
                slug,
            )
        } catch (error) {
            console.log("AppWrite :: getPost :: error", error);
            return false
        }
    }

    async getPosts(Queries = [Query.equal("status", "active")]) {
        try {
            return await this.databases.listDocuments(
                DataBase.databaseId,
                DataBase.collectionId,
                Queries,
            )
        } catch (error) {
            console.log("AppWrite :: getPosts :: error", error);
            return false
        }
    }



    // file uplode services

    async uploadFile(file) {
        try {
            return await this.buket.createFile(
                DataBase.buketId,
                ID.unique(),
                file
            )
        } catch (error) {
            console.log("AppWrite :: uplodeFile :: error", error);
            return false
        }
    }

    async deleteFile(fileId) {
        try {
            await this.buket.deleteFile(
                DataBase.buketId,
                fileId
            )
            return true
        } catch (error) {
            console.log("AppWrite :: deleteFile :: error", error);
            return false
        }
    }

    getFile(fileId) {
        return this.buket.getFilePreview(
            DataBase.buketId,
            fileId
        )
    }

}



const storage = new StorageService()

export default storage