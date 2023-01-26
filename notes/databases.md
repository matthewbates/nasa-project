# PRIMARY & FOREIGN KEYS

The foreign key references the primary key (unique identifier) of a different table, allowing a relationship to be formed

# VERTICAL SCALABILITY

Vertical: adding more capacity to a single database (i.e., adding more disc space). It can only grow so much

Relational databases usually use vertical scalability to grow

# HORIZONTAL SCALABILITY

Adding capacity by adding more machines (i.e., adding additional databases). Work together as a single database

The more machines you add to a system, the more complexity it adds

# SHARDING

Splitting data and operations on different databases

Have to use a routing system that knows where each of the data is located

Distribute queries to the correct database

# POSTGRES VS. MONGODB

MongoDB

Type: document
Organized into: collections
Query language: NoSQL
Scaling: primary horizontal
Schema: flexible

Best for unstructured data or where the structure will change often

Postgres

Type: relational
Organized into: tables
Query language: SQL
Scaling: primary vertical
Schema: rigid

Structure of data is known and well defined
