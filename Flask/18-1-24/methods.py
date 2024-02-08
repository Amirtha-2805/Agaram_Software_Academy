from flask import Flask,request,render_template
app=Flask(__name__)
details=[{"roll_no":1,"name":"Amirtha","place":"Nagercoil"},
         {"roll_no":2,"name":"Aiswarya","place":"Chennai"},
         {"roll_no":3,"name":"Jayasree","place":"Kollam"},]


@app.route("/details",methods=["GET"])
def datas():
    return details


@app.route("/details/<int:student_roll_no>",methods=["GET"])
def number(student_roll_no):
    for i in details:
        if i["roll_no"]==student_roll_no:
            return i
    return "Error"  

@app.route("/newdata",methods=["POST","GET"])
def add():
    if request.method=="POST":
        new_student={"roll_no":len(details)+1,
                     "name":request.form["s_name"],
                     "place":request.form["location"]}
        details.append(new_student)
        return details
    else:
        return render_template("methods.html")

     
@app.route("/update/<updatevalue>",methods=["GET","PUT","POST"])
def update_details(updatevalue):
        if request.method=="POST":
            update_student={"roll_no":int(request.form["s_no"]),
                           "name":request.form["s_name"],
                           "place":request.form["location"]}
            details[int(updatevalue)]=update_student
            # details[int(updatevalue)]=request.form["location"]

            return details
        else:
            value=details[int(updatevalue)]
            return render_template("update.html",values=value)
        

@app.route("/delete/<int:deletevalue>")  
def delete_data(deletevalue):
    for j in details:
        if j["roll_no"]==deletevalue:
            details.remove(j)
            return details
            
    
        return "Not able to delete data"
        

# @app.route("/update/<int:updatevalue>")
# def update_date(updatevalue):
#     for k in details:
#         if k["roll_no"]==updatevalue:
#             k["name"]=request.form["s_name"]
#             k["place"]=request.form["location"]
#             return k

if __name__=="__main__":
    app.run(debug=True)
