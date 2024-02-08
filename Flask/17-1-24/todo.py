from flask import Flask,render_template,request
app=Flask(__name__)

list=[]
@app.route("/todo",methods=["GET","POST"])
def addtodo():
    if request.method=="POST":
        list.append(request.form["thing"]) 
    return render_template("todo.html",lists=list)

    
@app.route("/deltodo/<deletevalue>",methods=["GET","POST"])
def deltodo(deletevalue):
    list.remove(deletevalue)
    return render_template("todo.html",lists=list)

@app.route("/updatetodo/<updatevalue>",methods=["GET","POST","PUT"])
def updatetodo(updatevalue):
    if request.method=="POST":
        list[int(updatevalue)]=request.form["updated_item"]
        return render_template("todo.html",lists=list)
    else:
        value=list[int(updatevalue)]  
        return render_template("update.html",value=value)  
    # return render_template("todo.html",lists=list)





if __name__ == "__main__":
    app.run(debug=True)
