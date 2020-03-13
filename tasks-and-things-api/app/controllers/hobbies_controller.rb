class HobbiesController < ApplicationController
  def index
    render json: Hobby.all
  end

  def create
    Hobby.create(name: params[:hobby][:text], effort: params[:hobby][:effort])
    render json: Hobby.all
  end

  def destroy
    Hobby.destroy(params[:hobby][:id])
    render json: Hobby.all
  end

  private

  def hobby_params
    params.require(:hobby).permit(:id, :text, :effort)
  end
end
