#version 450
precision mediump float;

//uniform mat4 transf;
//uniform mat4 extra;

in vec4 f_color;
in mat4 iv;

out vec4 out_color;

void main() {
    vec2 uv = f_color.xy;


    vec3 screenspace_ray = vec3(uv * 2. - 1., 0.2);
    vec3 ray_dir = normalize((iv * vec4(screenspace_ray, 1)).xyz);

    vec3 color = mix(
        vec3(0.412,0.688,1.000),
        vec3(0.),
        (1. - ray_dir.y) / 2.
    );

    out_color = vec4(color,1);
}

