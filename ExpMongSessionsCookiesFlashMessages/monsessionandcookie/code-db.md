An app has -> one data base -> that data base may have multiple collections as per the app -> each collection has a document which is the smallest part of a data base 

An app has -> one data base  setup -> that data base setup  may have multiple models as per the app -> each model has a schema which is the smallest part of a data base setup


data base (single entity)  >>>  collections( may be numberous) >>> these collections have documents that is the data that they will hold.



# CODE SIDE    |    MONGO DB Side 


# DB Setup     |      DB Formation
(When "db" is setup in code side a "data base" is formed in DB side)

# MODEL        |        Collection

1) When "Model" is created in code side a "collection" is formed in DB side.
    
2) Model is the code written and the part/partition formed in database because of that code is known as collection of that respective model

    eg: when an user model is formed a collection named user is formed in that respected DB




# Schema       |        Documents

When "Schema" is created in code side a "document" is formed in DB side

1) the schema is the data that a collection will have