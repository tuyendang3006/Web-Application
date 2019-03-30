var todoApp=angular.module('todoApp',[]);
todoApp.controller('taskCtrl',['$scope',function($scope){
        $scope.taskSet=[
            {
                taskName:'Suivre les cours',
                checked:true
            },
            {
                taskName:'Manger du déjeuner',
                checked:false
            },
            {
                taskName:'Faire des exercices',
                checked:false
            }];
    
    
    $scope.addTask=function(){
        if($scope.taskName != '')
        {
            //console.log($scope.taskName);
            $scope.taskSet.push(
                {
                    taskName: $scope.taskName,
                    checked:false
                });
            $scope.taskName='';
        }
    };
    $scope.supprimer=function(task){
        //console.log(task.taskName);
        $scope.taskSet.splice($scope.taskSet.indexOf(task), 1);

    };
    $scope.finishedTasks=[];

    $scope.checkedIndex=function(task){
        angular.forEach($scope.taskSet,function(value,index){
            if(value.checked == true)
            $scope.finishedTasks.push(value);
        });
        if($scope.finishedTasks.indexOf(task) == -1){
            $scope.finishedTasks.push(task);
        }
        else
            $scope.finishedTasks.splice($scope.finishedTasks.indexOf(task),1);
        angular.forEach($scope.finishedTasks,function(value,index) {
            console.log(value.taskName);
        });
    };
    
}]);
