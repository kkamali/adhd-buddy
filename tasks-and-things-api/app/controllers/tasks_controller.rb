require 'pry'
class TasksController < ApplicationController
  def index
    tasks = Task.all
    render json: tasks
  end

  def create
    binding.pry
    Task.create(name: params[:task][:text], time_sensitive: params[:task][:timeSensitive])
    render json: Task.all
  end

  def task_params
    params.require(:task).permit(:text, :timeSensitive)
  end
end
